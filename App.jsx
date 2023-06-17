const externalAppUrl = "http://localhost:5173/";
// noinspection JSAnnotator
return (
    <>
        <Widget
            src="wendersonpires.near/widget/NearSocialBridgeCore"
            props={{
                externalAppUrl,
                initialViewHeight: 1240,
            }}
        />
    </>
);