import React from "react";
import './CompanyCard.scss';

const CompanyCard = (props) => {
    const { name } = props;
    const { cumulativeSales } = props;
    const { targetSales } = props;
    const { categoryId } = props;
    const calculatedWidth = 100 - ((parseInt(targetSales) - parseInt(cumulativeSales)) / parseInt(targetSales)) * 100;
    const width = parseInt(calculatedWidth) + "%";
    let backgroundColor = "green";
    let track = "On track";
    if (calculatedWidth <= 20) {
        backgroundColor = "red";
        track = "At Risk"
    }
    else if (calculatedWidth > 20 && calculatedWidth <= 50) {
        backgroundColor = "orange";
        track = "Off Track"
    }
    else if (calculatedWidth > 50) {
        backgroundColor = "green";
    }
    return (
        <div id={categoryId} className="companyCard">
            <div className="companyTitle">
                <h3> {name != null ? name : "Anonymous"} </h3>
            </div>
            <div>
                <div className="info">
                    <div className="companySales">
                        <h3>Cumumlative Sales =  {cumulativeSales}</h3>
                        <h3>Target Sales =  {targetSales}</h3>
                    </div>
                    <div className="track" style={{ color: backgroundColor, fontSize: "15px", marginTop: "auto" }}>
                        <h3>{track}</h3>
                    </div>
                </div>
                <div className="health" style={{ position: "relative", width: "100%", height: "20px", border: "1px solid", borderColor: backgroundColor, borderRadius: "10px" }}>
                    <div id="player1Health" style={{ width: width, height: "20px", backgroundColor: backgroundColor, borderRadius: "10px" }}></div>
                </div>
            </div>
        </div>
    );
}

export default CompanyCard;

//Node: A node is a draggable block that can be connected with other nodes.
// Edge: An edge is a connection between two nodes.
// Handle: A handle is a kind of port of a node that is used to connect nodes. You start a connection at a handle and end it on another one.
// Connection Line: The connection line is the line that gets drawn while you connect two nodes with each other.
// Transform: Used to describe the current viewport of the pane. It's an array with three numbers: [x, y, zoom].