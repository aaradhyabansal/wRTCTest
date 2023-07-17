const lc = new RTCPeerConnection();

const dc = lc.createDataChannel("channel");

dc.onmessage = (e) => console.log("New message from client" + e.data);

dc.onopen = (e) => console.log("Connection Opened!!!");

lc.onicecandidate = (e) =>
  console.log("new Ice Candidate" + JSON.stringify(lc.localDescription));

lc.createOffer()
  .then((o) => lc.setLocalDescription(o))
  .then((a) => console.log("offer set success"));
//you will then receive offer and then copy paste the last offer to the client peer side
const answer = {
  //you will then receive answer then copy paste the last answer/icecandidate to the server peer side/
};
//finally run this command
lc.setRemoteDescription(answer);
