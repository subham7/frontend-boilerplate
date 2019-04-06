import reduxCodeGenerator from "../utils/reduxCodeGenerator"
 
import api from "../api"


let tempObject = {}
Object.keys(api).map(expName => {
    Object.keys(api[expName]).map(childexportName => {
        tempObject[childexportName] = reduxCodeGenerator(childexportName, api[expName][childexportName])
    })
})

module.exports = tempObject


