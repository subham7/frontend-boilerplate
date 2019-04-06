import css from "styled-jsx/css"

export default css`
  .dashboard {
    min-height: 100vh;
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    z-index: 50;
  }

  .content-wrapper {
    min-height: calc(100vh - 50px);
    position: absolute;
    top: 50px;
    width: 100%;
  }

  .sidebar {
    position: fixed;
    top: 50px;
    width: 210px;
    height: calc(100vh - 50px);
  }

  .content {
    position: absolute;
    right: 0;
    width: calc(100% - 210px);
    min-height: calc(100vh - 50px);
    display: inline-block;
    padding: 10px 20px;
  }
`
