
  const firebaseConfig = {
    apiKey: "AIzaSyAH6wv3pIoeC62P7mVtELFotwvf1y2eTsc",
    authDomain: "mathewfirebasedata.firebaseapp.com",
    databaseURL: "https://mathewfirebasedata-default-rtdb.firebaseio.com",
    projectId: "mathewfirebasedata",
    storageBucket: "mathewfirebasedata.appspot.com",
    messagingSenderId: "1038133967224",
    appId: "1:1038133967224:web:bac0e8353bd5aa341fb08d",
    measurementId: "G-JMFY00DNBD"
  };
firebase.initializeApp(firebaseConfig);

const contactFormDB=firebase.database().ref('MathewsDatabase');
document.getElementById('contactForm').addEventListener("submit",submitForm);

function submitForm(e)
{

    e.preventDefault();
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    saveMessages(name,emailid,msgContent);

}

const saveMessages=(name,emailid,msgContent)=>
{
    var newContact=contactFormDB.push();
    newContact.set({
        name:name,
        emailid:emailid,
        msgContent:msgContent
    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
  };