import React, { useState } from "react";

function useAddMostri() {
	return (
		<div>
			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addNewCard">
				Add Mostri
			</button>
			<div className="modal fade" id="addNewCard" tabindex="-1" role="dialog" aria-labelledby="addNewCard" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Add new Mostri</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>Modal body text goes here.</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary">
								Save
							</button>
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default useAddMostri;
