import React from "react";

function Button({ className, text, disabled }) {
	return (
		<button className={className} disabled={disabled}>
			{text}
		</button>
	);
}

export { Button };
