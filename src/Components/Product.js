import React from "react";

class Product extends React.Component {

    render() {
        return (
            <div>
                {this.props.name0 &&
                    < div >

                            <div class='chap'>
                                < p > {this.props.name0} < /p>
                                < p > {this.props.cost0} < /p>
                                <img src= {this.props.url0} />
                                < p > {this.props.text0} < /p>
                                < p > {this.props.product0} < /p>
                            </div>

                            <div class='chap'>
                                < p > {this.props.name1} < /p>
                                < p > {this.props.cost1} < /p>
                                <img src= {this.props.url1} />
                                < p > {this.props.text1} < /p>
                                 < p > {this.props.product1} < /p>
                            </div>

                            <div class='chap'>
                                < p > {this.props.name2} < /p>
                                < p > {this.props.cost2} < /p>
                                <img src= {this.props.url2} />
                                < p > {this.props.text2} < /p>
                                < p > {this.props.product2} < /p>
                              </div>

                            <div class='chap'>
                                < p > {this.props.name3} < /p>
                                < p > {this.props.cost3} < /p>
                                <img src= {this.props.url3} />
                                < p > {this.props.text3} < /p>
                                < p > {this.props.product3} < /p>
                            </div>

                          <div class='chap'>
                                < p > {this.props.name4} < /p>
                                < p > {this.props.cost4} < /p>
                                <img src= {this.props.url4} />
                                < p > {this.props.text4} < /p>
                                < p > {this.props.product4} < /p>
                            </div>

                     < /div>
             }
            </div>
    );
    }
}

export default Product;