import React from 'react';

export default function InfoTooltip({isShow, infoTooltipStatus, infoTooltipMessage, onClose}) {

	return(
		<section className={isShow? `info-tooltip info-tooltip_${infoTooltipStatus}` : "info-tooltip info-tooltip_hidden"}>
			<span className="info-tooltip__close" onClick={onClose}>X</span>
			<p className="info-tooltip__text">{infoTooltipMessage}</p>
		</section>
	)
}