const MainDisplay = styled.div`
display: flex;
`;

const MainLeftBlock = styled.div`
width: 420px;
height: 683px;
border: 3px solid black;
`;
const Input = styled.input`
width: 330px;
height: 40px;
border: 2px solid black;
border-radius: 5px;
margin: 5px 0px 0px 10px;
font-size: 28px;
padding: 0px 0px 0px 10px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
::placeholder{
  color: black;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

`;
const ButtonSearch = styled.button`
margin: 9px 0px 0px 10px;
width: 30px;
height: 30px;
display: flex;
margin: -38px 0px 0px 365px;
border: 2px solid black;
border-radius: 5px;
cursor: pointer;
`;
const ButtonBlock = styled.div`
  width: 600px;
  height: 400px;
  border-radius: 60px;
  border: 3px solid black;
  background-color: white;
  position: absolute;
  top: 16%;
  left: 20%;
`;

const Chats = styled.div`
`;
const Chat1 = styled.div`
margin: 30px 0px 0px 0px;
height: 70px;
width: 410px;
border-top: 1px solid black;
font-size: 10px;
display: flex;
background-color: ${({ isActive }) => (isActive ? "gray" : "white")};
`;
const User = styled.div`
margin: 20px 0px 0px 0px;
font-size: 20px;
cursor: pointer;
`;
const Indicator = styled.div`
width: 20px;
height: 20px;
border-radius: 10px;
background-color: green;
margin: 25px 0px 0px 190px;
`;

const FotoUser = styled.div`
background-color: black;
height: 50px;
width: 50px;
border-radius: 30px;
margin: 10px;
`;

const Chat2 = styled.div`
margin: 0px 0px 0px 0px;
height: 70px;
width: 415px;
border-top: 1px solid black;
border-right: 1px solid black;
display: flex;
background-color: ${({ isActive1 }) => (isActive1 ? "gray" : "white")};
`;
const Chat3 = styled.div`
margin: 0px 0px 0px 0px;
height: 70px;
width: 415px;
border-top: 1px solid black;
border-right: 1px solid black;
display: flex;
background-color: ${({ isActive2 }) => (isActive2 ? "gray" : "white")};
`;
const Chat4 = styled.div`
margin: 0px 0px 0px 0px;
height: 70px;
width: 415px;
border-top: 1px solid black;
border-right: 1px solid black;
display: flex;
background-color: ${({ isActive3 }) => (isActive3 ? "gray" : "white")};
`;
const GroupChat = styled.div`
margin: 0px 0px 0px 0px;
height: 70px;
width: 415px;
border-top: 1px solid black;
border-bottom: 1px solid black;
border-right: 1px solid black;
display: flex;
cursor: pointer;
background-color: ${({ isActive4 }) => (isActive4 ? "gray" : "white")};
`;
const GroupChatName = styled.div`
margin: 20px 0px 0px 150px;
font-size: 25px;
color: black;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;
const FooterMadeByOstolex = styled.div`
margin: 200px 0px 0px 0px;
height: 60px;
width: 414px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(180, 184, 181);
`;

const InputChat = styled.input`
height: 50px;
width: 1000px;
font-size: 30px;
color: black;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
border: none;
::placeholder{
  color: black;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
}
`;
const HeaderChat = styled.div`
width: 900px;
height: 70px;
border-top: 1px solid black;
border-right: 1px solid black;
border-bottom: 1px solid black;
display: flex;
align-items: center;
`;
const H1User = styled.h1`
height: 20px;
width: 40px;
background-color: black;
font-size: 20px;
margin-left: 20px;
cursor: pointer;
color: white;
`;
const Call = styled.div`
height: 20px;
width: 20px;
background-color: black;
margin: 0px 0px 0px 750px;
cursor: pointer;
color: white;
`;
const Extension = styled.div`
height: 20px;
width: 20px;
background-color: black;
margin: 0px 0px 0px 20px;
cursor: pointer;
color: white;
`;
const SendBlock = styled.div`
display: flex;
background-color: white;
margin: 550px 0px 0px 0px;
border-top: 3px solid black;
width: 900px;
height: 60px;
`;
const Inpu = styled.input`
  display: none;
`;
const Label = styled.label`
padding: 10px 10px;
width: 100px;
height: 60px;
background: #333;
color: #FFF;
text-transform: uppercase;
display: block;
font-family: Arial, Helvetica, sans-serif;
text-align: center;
:hover{
  color: #333;
  background: #FFF;
}
`;
const VoiceMessage = styled.div`
width: 80px;
margin: 0px 20px;
background: #333;
color: #FFF;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
text-transform: uppercase;
font-family: Arial, Helvetica, sans-serif;
:hover{
  color: #333;
  background: #FFF;
}
`;
const Emoji = styled.div`
width: 80px;
margin: 0px 20px;
background: #333;
color: #FFF;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
text-transform: uppercase;
font-family: Arial, Helvetica, sans-serif;
:hover{
  color: #333;
  background: #FFF;
}
`;
const Setting = styled.div`
width: 80px;
height: 60px;
margin: 0px 20px;
background: #333;
color: #FFF;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
text-transform: uppercase;
font-family: Arial, Helvetica, sans-serif;
:hover{
  color: #333;
  background: #FFF;
}
`;
const SendMessage = styled.div`
width: 90px;
margin: 0px 0px;
background: #333;
color: #FFF;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
text-transform: uppercase;
font-family: Arial, Helvetica, sans-serif;
:hover{
  color: #333;
  background: #FFF;
}
`;
const BlackBlock = styled.div`
  width: 200px;
  height: 80px;
  position: absolute;
  top: 750px;
  left: 1375px;
  transform: translate(-50%, -50%);
  color: white;
  background-color: black;
  font-size: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InfoLorem = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  position: absolute;
  top: -100px;
  left: 200px;
  border-radius: 20px 20px 20px 0px;
  color: white;
  padding: 5px 0px 0px 4px;

`;
const InfoLorem1 = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  position: absolute;
  top: -100px;
  left: 200px;
  border-radius: 20px 20px 20px 0px;
  color: white;
  padding: 5px 0px 0px 4px;
`;

const OptionBlokUser = styled.div`
  width: 600px;
  height: 400px;
  border-radius: 60px;
  border: 3px solid black;
  background-color: white;
  position: absolute;
  top: 16%;
  left: 40%;
`;
const Aperance = styled.div`
  width: 600px;
  height: 400px;
  border-radius: 60px;
  border: 3px solid black;
  background-color: white;
  position: absolute;
  top: 16%;
  left: 40%;
`;

const ChatWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Labe = styled.div`
  margin-right: 10px;
`;

const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
  
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
`;

const SearchInput = styled.input`
  width: 300px;
`;
const ChatList = styled.div`
  margin-top: 10px;
`;

const ChatItem = styled.h4`
  margin-bottom: 5px;
`;

const OverlayTrigger1 = styled.div`
`;
const OverlayTrigger2 = styled.div`
`;
const OverlayTrigger3 = styled.div`
`;
const OverlayTriggerGroupChat = styled.div`
`;
const OverlayTriggerExtension = styled.div`
`;
const OverlayTriggerSettBlock = styled.div`
`;

State.init({
    showOption: false,
    show: false,
    isActive: false,
    isActive1: false,
    isActive2: false,
    isActive3: false,
    isActive4: false,
    showEmoji: false,
    showBlacBlock: false,
    showSettBlock: false,
    showInfoBlock: false,
    showInfo2Block: false,
    showSearchBlock: false,
    showBlockUser: false,
    showAppearanceBlock: false,
});

const handleOnClickChat1 = () => {
    State.update({ show: !state.show, isActive: !state.isActive });
};
const handleOnClickChat2 = () => {
    State.update({ show: !state.show, isActive1: !state.isActive1 });
};
const handleOnClickChat3 = () => {
    State.update({ show: !state.show, isActive2: !state.isActive2 });
};
const handleOnClickChat4 = () => {
    State.update({ show: !state.show, isActive3: !state.isActive3 });
};
const handleOnClickGroupChat = () => {
    State.update({ show: !state.show, isActive4: !state.isActive4 });
};

const handleOnClickExtension = () => {
    State.update({
        showOption: !state.showOption,
        showBlacBlock: !state.showBlacBlock,
        showSettBlock: false,
    });
};

const handleOnClickSettBlock = () => {
    State.update({
        showOption: !state.showOption,
        showSettBlock: !state.showSettBlock,
    });
};

const handleOnClickInfoBlock = () => {
    State.update({ showInfoBlock: !state.showInfoBlock });
};

const handleOnClickInfo2Block = () => {
    State.update({ showInfo2Block: !state.showInfo2Block });
};
const handleOnClickBlockUser = () => {
    State.update({ showBlockUser: !state.showBlockUser });
};
const handleOnClickAppearanceBlock = () => {
    State.update({ showAppearanceBlock: !state.showAppearanceBlock });
};
const handleOnClickEmoji = () => {
    State.update({ showEmoji: !state.showEmoji });
};

const handleOnClickSearchBlock = () => {
    State.update({ showSearchBlock: !state.showSearchBlock });
};

const SettBlock = (
    <div
        style={{
            backgroundColor: "black",
            width: "200px",
            height: "90px",
            position: "absolute",
            top: "0",
            right: "100px",
            marginTop: "535px",
            color: "white",
        }}
    >
        <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "10px" }}>efficency</div>
            <input
                className="checkbox"
                type="checkbox"
                style={{ marginRight: "10px" }}
            />
            <div>privacy</div>
            <button
                style={{
                    width: "15px",
                    height: "16px",
                    borderRadius: "20px",
                    padding: "0px",
                    fontSize: "10px",
                    backgroundColor: "grey",
                    border: "1px solid grey",
                }}
                onClick={handleOnClickInfoBlock}
            >
                i
            </button>
            {state.showInfoBlock && (
                <div
                    style={{
                        backgroundColor: "black",
                        width: "100px",
                        height: "100px",
                        position: "absolute",
                        marginBottom: "130px",
                        marginLeft: "160px",
                        borderRadius: "10px 10px 10px 0px",
                    }}
                >
                    Lorem ipsum
                </div>
            )}
        </div>
        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "0px 0px 0px 40px",
            }}
        >
            <div style={{ marginLeft: "7px" }}>salt</div>
            <input
                className="checkbox"
                type="checkbox"
                style={{ marginRight: "10px" }}
            />
            <div>no salt</div>
            <button
                style={{
                    width: "15px",
                    height: "16px",
                    borderRadius: "20px",
                    padding: "0px",
                    fontSize: "10px",
                    backgroundColor: "grey",
                    border: "1px solid grey",
                }}
                onClick={handleOnClickInfo2Block}
            >
                i
            </button>
            {state.showInfo2Block && (
                <div
                    style={{
                        backgroundColor: "black",
                        width: "100px",
                        height: "100px",
                        position: "absolute",
                        marginBottom: "130px",
                        marginLeft: "160px",
                        borderRadius: "10px 10px 10px 0px",
                    }}
                >
                    Lorem ipsum
                </div>
            )}
        </div>
    </div>
);

const BlacBlock = (
    <div
        style={{
            backgroundColor: "black",
            width: "140px",
            height: "90px",
            position: "absolute",
            top: "0",
            right: "0px",
            marginTop: "70px",
            color: "white",
        }}
    >
        <ul>
            <li onClick={handleOnClickBlockUser}>Block user</li>
            <li>Notifications</li>
            <li onClick={handleOnClickAppearanceBlock}>Aperance</li>
        </ul>
        {state.showBlockUser && (
            <div
                style={{
                    backgroundColor: "blue",
                    borderRadius: "40px",
                    width: "400px",
                    height: "240px",
                    position: "absolute",
                    top: "0",
                    right: "270px",
                    marginTop: "105px",
                    display: "flex",
                    alignItems: "center",
                    padding: "0px 0px 0px 10px",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    Are you sure that you want to (un)block max23black.near? This user
                    won't (will) be able to text you from this account.
                    <div style={{ margin: "30px 0px 0px 90px" }}>
                        <button onClick={handleOnClickBlocking} style={{ width: "100px" }}>
                            Yes
                        </button>
                        <button style={{ width: "100px" }}>No</button>
                    </div>
                </div>
            </div>
        )}

        {state.showAppearanceBlock && (
            <div
                style={{
                    backgroundColor: "red",
                    borderRadius: "40px",
                    width: "600px",
                    height: "500px",
                    position: "absolute",
                    top: "0",
                    right: "170px",
                    marginTop: "15px",
                    padding: "10px 0px 0px 40px",
                }}
            >
                <h3>Themes</h3>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: index < 4 ? "gray" : "lightgray",
                                margin: "5px",
                            }}
                        ></div>
                    ))}
                </div>
                <h3>Colors</h3>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "gray",
                                borderRadius: "50px 50px 50px 50px",
                                margin: "5px",
                            }}
                        ></div>
                    ))}
                </div>
                <h3>Wallpaper</h3>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: index < 4 ? "gray" : "lightgray",
                                margin: "5px",
                            }}
                        ></div>
                    ))}
                </div>
                <input type="file" name="name" />
                <div style={{ margin: "40px 0px 0px 50px" }}>
                    <button>Apply to this chat</button>
                    <button>Apply to all chats</button>
                    <button>Discard</button>
                </div>
            </div>
        )}
    </div>
);

const MainRightBlock = (
    <div
        style={{
            backgroundColor: "gray",
            margin: "90px 0px 0px 572px",
            width: "900px",
            height: "680px",
        }}
    >
        <HeaderChat>
            <H1User>user</H1User>
            <Call>call</Call>
            <OverlayTriggerExtension
                show={state.showOption}
                trigger="click"
                placement="right"
                overlay={BlacBlock}
            >
                <Extension onClick={handleOnClickExtension}>...</Extension>
            </OverlayTriggerExtension>
            {state.showBlacBlock && BlacBlock}
        </HeaderChat>
        <SendBlock>
            <div>
                <Label for="arquivo">Send File</Label>
                <Inpu type="file" name="arquivo" id="arquivo" />
            </div>
            <InputChat type="text" placeholder="Write a message..." name="name" />
            <VoiceMessage>Voice</VoiceMessage>
            <Emoji onClick={handleOnClickEmoji}>Emoji</Emoji>
            {state.showEmoji && (
                <div
                    style={{
                        backgroundColor: "red",
                        width: "300px",
                        height: "350px",
                        position: "absolute",
                        top: "0",
                        right: "170px",
                        marginTop: "250px",
                        padding: "10px 0px 0px 40px",
                    }}
                >
                    Emoji
                </div>
            )}
            <OverlayTriggerSettBlock
                show={state.showSettBlock}
                trigger="click"
                placement="right"
                overlay={SettBlock}
            >
                <Setting onClick={handleOnClickSettBlock}>Setting</Setting>
            </OverlayTriggerSettBlock>
            {state.showSettBlock && SettBlock}
            <SendMessage>Send</SendMessage>
        </SendBlock>
    </div>
);
// noinspection JSAnnotator
return (
    <>
        <MainDisplay>
            <MainLeftBlock>
                <div className="Search_block">
                    <Input type="text" placeholder="Search" name="name" />
                    <ButtonSearch onClick={handleOnClickSearchBlock}></ButtonSearch>
                    {state.showSearchBlock && (
                        <div
                            style={{
                                backgroundColor: "white",
                                color: "grey",
                                border: "2px solid black",
                                borderRadius: "40px",
                                width: "600px",
                                height: "500px",
                                position: "absolute",
                                top: "0",
                                left: "350px",
                                marginTop: "140px",
                                padding: "10px 0px 0px 40px",
                                zIndex: 5,
                            }}
                        >
                            <div>
                                <h3>Create a chat</h3>
                                <ChatWrapper>
                                    <Labe>private</Labe>
                                    <SwitchWrapper>
                                        <input type="checkbox" />
                                        <Slider round={true} />
                                    </SwitchWrapper>
                                    <Labe>group</Labe>
                                </ChatWrapper>
                                <SearchInput placeholder="Search" type="text" />
                                <ChatList>
                                    <ChatItem>kastet99.near</ChatItem>
                                    <ChatItem>let45fc.near</ChatItem>
                                    <ChatItem>max23black.near</ChatItem>
                                    <ChatItem>denchik.near</ChatItem>
                                </ChatList>
                            </div>
                        </div>
                    )}
                </div>
                <Chats>
                    <OverlayTrigger
                        show={state.show}
                        trigger="click"
                        placement="right"
                        overlay={MainRightBlock}
                    >
                        <Chat1 onClick={handleOnClickChat1} isActive={state.isActive}>
                            <FotoUser></FotoUser>
                            <User>kastet99.near</User>
                            <Indicator></Indicator>
                        </Chat1>
                    </OverlayTrigger>

                    <OverlayTrigger1
                        show={state.show}
                        trigger="click"
                        placement="right"
                        overlay={MainRightBlock}
                    >
                        <Chat2 onClick={handleOnClickChat2} isActive1={state.isActive1}>
                            <FotoUser></FotoUser>
                            <User>let45fc.near</User>
                        </Chat2>
                    </OverlayTrigger1>
                    <OverlayTrigger2
                        show={state.show}
                        trigger="click"
                        placement="right"
                        overlay={MainRightBlock}
                    >
                        <Chat3 onClick={handleOnClickChat3} isActive2={state.isActive2}>
                            <FotoUser></FotoUser>
                            <User>max23black.near</User>
                        </Chat3>
                    </OverlayTrigger2>
                    <OverlayTrigger3
                        show={state.show}
                        trigger="click"
                        placement="right"
                        overlay={MainRightBlock}
                    >
                        <Chat4 onClick={handleOnClickChat4} isActive3={state.isActive3}>
                            <FotoUser></FotoUser>
                            <User>denchik.near</User>
                        </Chat4>
                    </OverlayTrigger3>
                    <OverlayTriggerGroupChat
                        show={state.show}
                        trigger="click"
                        placement="right"
                        overlay={MainRightBlock}
                    >
                        <GroupChat
                            onClick={handleOnClickGroupChat}
                            isActive4={state.isActive4}
                        >
                            <GroupChatName>Group chat</GroupChatName>
                        </GroupChat>
                    </OverlayTriggerGroupChat>
                </Chats>
                <FooterMadeByOstolex>made by OSTOLEX</FooterMadeByOstolex>
            </MainLeftBlock>
        </MainDisplay>
    </>
);
