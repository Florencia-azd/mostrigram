import React, { useState } from "react";
import AddMostri from "./AddMostri";

function useHeader () {
	return (
		<div>
			<h1>Mostrigram App</h1>
            <AddMostri />
		</div>
	);
};

export default useHeader;
