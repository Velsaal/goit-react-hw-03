import styles from "./ContactItem.module.css";

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li className={styles.item}>
    {name}: {number}
    <button onClick={() => onDeleteContact(id)}>Delete</button>
  </li>
);

export default ContactItem;