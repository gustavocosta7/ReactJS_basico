import React,{ Component } from 'react';
import api from '../../services/api';
import { __await } from 'tslib';

export default class Main extends Component{
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        console.log(response.data.docs);
    };

    render(){
        return <h1>Esse é o main</h1>
    }
}