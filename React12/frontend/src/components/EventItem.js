import classes from './EventItem.module.css';
import { Link, useSubmit } from 'react-router-dom';

function EventItem({event}) {
  // console.log(props.event);
  // console.log(event);
  const _event = event.event
  console.log(_event);
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure ?");
    if (proceed) {
      submit(null, {method: 'delete'});
    }
  }

  return (
    <article className={classes.event}>
      <img src={_event.image} alt={_event.title} />
      <h1>{_event.title}</h1>
      <time>{_event.date}</time>
      <p>{_event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;

