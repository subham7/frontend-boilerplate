import React from "react"
import { connect } from "react-redux"
//Just for knowledge, HSN stands for Harmonized System of Nomenclature
import HSN from "../../../../src/components/organisms/hsn"

import { hsnColumns, hsnColumnData } from "./hsn.data"
import { itemData } from "../../../../pagesData/item.data"
import { hsncodes, addHsnCode, deleteHsnCode, updateHsnCode } from "../../../../src/reduxHelper"
import uuid from "uuid/v4"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hsnTableData: [],
      filteredTableData: []
    }
  }

  componentDidMount() {
    this.loadHsnCodeData()
  }

  handleCreateTaxes(data, cb) {
    let object = {}
    object.hsnname = data.values.name
    object.hsncodeID = uuid()
    console.log(object, "gafgfahajn")
    this.props.addHsnCode(object).then(res => {
      console.log(res, "responsnewwd")
      this.loadHsnCodeData()
      cb({ status: true, message: "HSN created successfully" })
    }).catch(err => {
      console.log(err)
      cb({ status: false, message: "SomeError occured" })
    })
  }

  handleSearch(e) {
    const filteredEvents = this.state.hsnTableData.filter(function (data) {
      var pattern = new RegExp(e.target.value, "i")
      return data.name.match(pattern)
    })
    this.setState({ filteredTableData: filteredEvents })
  }

  render() {
    // will not render under taxcategory loaded
    if (true) {
      return (
        <div>
          <HSN
            rowSelection={{}}
            cascaderData={itemData.cascaderData}
            columns={hsnColumns}
            columnData={this.state.hsnTableData}
            pagination={{ pageSize: 7, showLessItems: true, showSizeChanger: true, pageSizeOptions: ['5', '10', '15', '20'] }}
            onCreate={(data, cb) => this.handleCreateTaxes(data, cb)}
          />
        </div>
      )
    } else {
      return <h1>Loading</h1>
    }
  }

  _createHsnCodeColoumns(data) {
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {}
        object.name = item.hsnname
        object.hsnCode = item.hsncodeID
        object.handleFeatures = {
          handleDelete: (id) => {
            console.log(id)
            this.props.deleteHsnCode(id).then(res => {
              this.loadHsnCodeData();
            }).catch(err => {
              console.log(err);
            })
          },
          handleUpdate: (data, id, cb) => {
            // console.log("clicked", data, id, cb)
            this.props.updateTaxCategory(id, data.values).then(res => {
              this.loadHsnCodeData()
              cb({ status: true, message: "HSN Code updated" })
            }).catch(err => {
              console.log(err)
              cb({ status: false, message: "Some Error while updating" })
            })
          }
        }
        temp.push(object)
      })
    } else {
      let object = {}
      object.name = item.hsnname
      object.hsnCode = item.hsncodeID
      object.handleFeatures = {
        handleDelete: (id) => {
          console.log(id)
          this.props.deleteHsnCode(id).then(res => {
            this.loadHsnCodeData();
          }).catch(err => {
            console.log(err);
          })
        },
        handleUpdate: (data, id, cb) => {
          // console.log("clicked", data, id, cb)
          this.props.updateTaxCategory(id, data.values).then(res => {
            this.loadHsnCodeData()
            cb({ status: true, message: "HSN Code updated" })
          }).catch(err => {
            console.log(err)
            cb({ status: false, message: "Some Error while updating" })
          })
        }
      }
      temp.push(object)
    }
    return temp
  }

  loadHsnCodeData() {
    this.props
      .getHsnCodes()
      .then(res => {
        this.setState({
          hsnTableData: this._createHsnCodeColoumns(this.props.hsncodes.response.data)
        })
        console.log(this.state.hsnTableData, "statteeee")
      })
      .catch(err => console.log(err))
  }
}

const mapStateToProps = state => ({
  hsncodes: state.hsncodes,
})
// Example Syntax for writing dispatch
const mapDispatchToProps = dispatch => ({
  getHsnCodes: () => dispatch(hsncodes.action()),
  addHsnCode: object => dispatch(addHsnCode.action(object)),
  deleteHsnCode: hsncodeID => dispatch(deleteHsnCode.action(hsncodeID)),
  updateHsnCode: (hsncodeID, object) => dispatch(updateHsnCode.action(hsncodeID, object))
})
export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)