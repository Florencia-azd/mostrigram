import React, { useState } from "react";
import "../style/Card.css";

let stockImages = ["https://pngimage.net/wp-content/uploads/2018/06/mostri-png-7.png", "https://pngimage.net/wp-content/uploads/2018/06/mostri-png-7.png", "https://pngimage.net/wp-content/uploads/2018/06/mostri-png-7.png","https://pngimage.net/wp-content/uploads/2018/06/mostri-png-7.png"]

function useCard () {
	return (
		<div>
			{stockImages.map(function (image) {
				return (
					<div className="card">
						<img className="card-img-top" src={image} alt="Card image cap"/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default useCard;
