import './FormsOne.css';
const Forms=() => {
  return (
<form action="./App" method="post">
  <p>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name" />
  </p>
  <p>
    <label for="mail">Email:</label>
    <input type="email" id="mail" name="user_email" />
  </p>
  <p>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </p>
   <div className="button">
    <button type="submit"className="btn btn-success">Send your message</button>
  </div>
</form>
  );
};
export default Forms;