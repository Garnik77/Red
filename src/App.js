import React from 'react';
import Form from "./Components/form";
import Product from "./Components/Product";


class App extends React.Component {

    state = {
       name0: undefined,
        url0: undefined,
        url1: undefined,
        url2: undefined,
        url3: undefined,
        url4: undefined,
        product0: undefined,
       name1: undefined,
        product1: undefined,
       name2: undefined,
        product3: undefined,
       name3: undefined,
        product4: undefined,
       name4: undefined,
        text0:undefined,
        text1:undefined,
        text2:undefined,
        text3:undefined,
        text4:undefined,
        cost0:undefined,
        cost1:undefined,
        cost2:undefined,
        cost3:undefined,
        cost4:undefined,

        error:undefined
    }

    gettingWeater = async (e) => {
        e.preventDefault();

            const api_url = await
                fetch(`https://api.solo.am/v2/products?offset=0&limit=5&languageId=2&categoryId=180`);
        const data = await api_url.json();
        console.log(data);

        this.setState({
            name0: data.result.records[0].category.name,
           url0: data.result.records[0].photo.url,
           url1: data.result.records[1].photo.url,
           url2: data.result.records[2].photo.url,
           url3: data.result.records[3].photo.url,
           url4: data.result.records[4].photo.url,
           cost0: data.result.records[0].cost.current,
           cost1: data.result.records[1].cost.current,
           cost2: data.result.records[2].cost.current,
           cost3: data.result.records[3].cost.current,
           cost4: data.result.records[4].cost.current,
           product0 : data.result.records[0].product.name,
            name1: data.result.records[1].category.name,
            product1 : data.result.records[1].product.name,
            name2: data.result.records[2].category.name,
            product2 : data.result.records[2].product.name,
            name3: data.result.records[3].category.name,
            product3 : data.result.records[3].product.name,
            name4: data.result.records[4].category.name,
            product0 : data.result.records[0].product.text,
            product1 : data.result.records[1].product.text,
            product2 : data.result.records[2].product.text,
            product3 : data.result.records[3].product.text,
            product4 : data.result.records[4].product.text,

            error: ""
        });
    }


    render() {
        return (
            <div>
                helow
            <Form weatherMethod = {this.gettingWeater}/>
            <Product
                name0 ={this.state.name0}
                name1 ={this.state.name1}
                name2 ={this.state.name2}
                name3 ={this.state.name3}
                name4 ={this.state.name4}
                product0 ={this.state.product0}
                product1 ={this.state.product1}
                product2 ={this.state.product2}
                product3 ={this.state.product3}
                product4 ={this.state.product4}
                url0 ={this.state.url0}
                url1 ={this.state.url1}
                url2 ={this.state.url2}
                url3 ={this.state.url3}
                url4 ={this.state.url4}
                text0 ={this.state.text0}
                text1 ={this.state.text1}
                text2 ={this.state.text2}
                text3 ={this.state.text3}
                text4 ={this.state.text4}
                cost0 ={this.state.cost0}
                cost1 ={this.state.cost1}
                cost2 ={this.state.cost2}
                cost3 ={this.state.cost3}
                cost4 ={this.state.cost4}


            />
            </div>
        );
    }
}
export default App;