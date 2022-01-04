import {useRef, useState} from "react";
import {
    AttachmentButton,
    Avatar,
    ChatContainer,
    Conversation, ConversationHeader,
    ConversationList, EllipsisButton, InfoButton,
    MainContainer, Message, MessageInput, MessageList, MessageSeparator,
    Search, SendButton,
    Sidebar, TypingIndicator
} from "@chatscope/chat-ui-kit-react";

function Chat() {
    const inputRef = useRef();
    const [msgInputValue, setMsgInputValue] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSend = message => {
        setMessages([...messages, {
            message,
            direction: 'outgoing'
        }]);
        setMsgInputValue("");
        inputRef.current.focus();
    };
    let lillyIco;
    let joeIco;
    let emilyIco;
    let kaiIco;
    let akaneIco;
    let eliotIco;
    let zoeIco;
    let patrikIco;
    return (
        <div style={{
            height: "600px",
            position: "relative"
        }}>
            <MainContainer responsive>
                <Sidebar position="left" scrollable={false}>
                    <Search placeholder="Search..."/>
                    <ConversationList>
                        <Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
                            <Avatar src={lillyIco} name="Lilly" status="available"/>
                        </Conversation>

                        <Conversation name="Joe" lastSenderName="Joe" info="Yes i can do it for you">
                            <Avatar src={joeIco} name="Joe" status="dnd"/>
                        </Conversation>

                        <Conversation name="Emily" lastSenderName="Emily" info="Yes i can do it for you" unreadCnt={3}>
                            <Avatar src={emilyIco} name="Emily" status="available"/>
                        </Conversation>

                        <Conversation name="Kai" lastSenderName="Kai" info="Yes i can do it for you" unreadDot>
                            <Avatar src={kaiIco} name="Kai" status="unavailable"/>
                        </Conversation>

                        <Conversation name="Akane" lastSenderName="Akane" info="Yes i can do it for you">
                            <Avatar src={akaneIco} name="Akane" status="eager"/>
                        </Conversation>

                        <Conversation name="Eliot" lastSenderName="Eliot" info="Yes i can do it for you">
                            <Avatar src={eliotIco} name="Eliot" status="away"/>
                        </Conversation>

                        <Conversation name="Zoe" lastSenderName="Zoe" info="Yes i can do it for you" active>
                            <Avatar src={zoeIco} name="Zoe" status="dnd"/>
                        </Conversation>

                        <Conversation name="Patrik" lastSenderName="Patrik" info="Yes i can do it for you">
                            <Avatar src={patrikIco} name="Patrik" status="invisible"/>
                        </Conversation>

                    </ConversationList>
                </Sidebar>

                <ChatContainer>
                    <ConversationHeader>
                        <ConversationHeader.Back/>
                        <Avatar src={zoeIco} name="Zoe"/>
                        <ConversationHeader.Content userName="Zoe" info="Active 10 mins ago"/>
                        <ConversationHeader.Actions>
                            <InfoButton/>
                            <EllipsisButton/>
                        </ConversationHeader.Actions>
                    </ConversationHeader>
                    <MessageList typingIndicator={<TypingIndicator content="Zoe is typing"/>}>

                        <MessageSeparator content="Saturday, 30 November 2019"/>

                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "single"
                        }}>
                            <Avatar src={zoeIco} name="Zoe"/>
                        </Message>

                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "single"
                        }} avatarSpacer/>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "first"
                        }} avatarSpacer/>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "normal"
                        }} avatarSpacer/>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "normal"
                        }} avatarSpacer/>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "last"
                        }}>
                            <Avatar src={zoeIco} name="Zoe"/>
                        </Message>

                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "first"
                        }}/>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "normal"
                        }}/>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "normal"
                        }}/>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "last"
                        }}/>

                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "first"
                        }} avatarSpacer/>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "last"
                        }}>
                            <Avatar src={zoeIco} name="Zoe"/>
                        </Message>
                    </MessageList>
                    <div as={MessageInput} style={{
                        display: "flex",
                        flexDirection: "row",
                        borderTop: "1px dashed #d1dbe4"
                    }}>
                        <MessageInput ref={inputRef} onChange={msg => setMsgInputValue(msg)} value={msgInputValue}
                                      sendButton={false} attachButton={false} onSend={handleSend} style={{
                            flexGrow: 1,
                            borderTop: 0,
                            flexShrink: "initial"
                        }}/>
                        <SendButton onClick={() => handleSend(msgInputValue)} disabled={msgInputValue.length === 0}
                                    style={{
                                        fontSize: "1.2em",
                                        marginLeft: 0,
                                        paddingLeft: "0.2em",
                                        paddingRight: "0.2em"
                                    }}/>
                        <AttachmentButton style={{
                            fontSize: "1.2em",
                            paddingLeft: "0.2em",
                            paddingRight: "0.2em"
                        }}/>
                        <InfoButton onClick={() => alert("Important message!")} style={{
                            fontSize: "1.2em",
                            paddingLeft: "0.2em",
                            paddingRight: "0.2em"
                        }}/>
                    </div>
                </ChatContainer>
            </MainContainer>
        </div>
    );
}

export default Chat;