import React,{Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchShips} from "../actions/index";

class ShipList extends Component{
    constructor(){
        super();
        this.renderShipData = this.renderShipData.bind(this);
        this.renderShip = this.renderShip.bind(this);
    }

    componentDidMount(){
        this.props.fetchShips();
    }

    renderShipData(shipData){
       return  shipData.map(this.renderShip);
    }

    renderShip(ship){
        //console.log("ship : ",ship );
        return(
            <tr key = {ship.name}>
                <td>{ship.name}</td>
                <td>{ship.type}</td>
                <td>{ship.nationality}</td>
            </tr>
        );
    }

    render(){
        if(this.props.shipyard.length == 0){
            return(<div>loading..</div>);
        }

        return(
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th>Ship</th>
                        <th>Type</th>
                        <th>Nationality</th>
                    </tr>
                </thead>
                <tbody>
                   {this.props.shipyard.map(this.renderShipData)}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({shipyard}) => {
    return {shipyard};
}

const mapDispatchToProps=(dispatch) =>{
    return bindActionCreators({fetchShips},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ShipList);

