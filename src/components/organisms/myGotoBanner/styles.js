import css from "styled-jsx/css"

export default css`
  .search {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 500px !important;
  }
  .bannerh1 {
    text-align: center;
    color: #fff;
    font-size: 3em;
    margin-bottom: 0;
  }
  .bannerP {
    text-align: center;
    color: #fff;
    font-size: 1.3em;
  }

  @media only screen and (max-width: 600px) {
    .search {
      width: 100%;
    }
    .bannerh1 {
      font-size: 1.5em;
    }
    .bannerP {
      font-size: 1em;
    }
  }
`
