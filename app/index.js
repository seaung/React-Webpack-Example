import React from 'react';
import ReactDom from 'react-dom';

import MyRouters from './routers';

ReactDom.render(
	<MyRouters />,
	document.getElementById("app")
);
