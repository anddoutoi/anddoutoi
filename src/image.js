import React, {useCallback, useEffect, useState} from "react";
import {Text} from "ink";
import terminalImage from "terminal-image";

function Image(props) {
	const {alt = "", src, ...otherProps} = props;
	const [image, setImage] = useState(null);

	const loadImage = useCallback(async (src) => {
		let data = await terminalImage.file(src, {...otherProps});

		setImage(data);
	}, []);

	useEffect(() => {
		void loadImage(src);
	}, [loadImage, src]);

	return <Text>{image != null ? image : null}</Text>;
}

export default Image;
