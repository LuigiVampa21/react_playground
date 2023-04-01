import classes from './Notification.module.css';

const Notification = (props) => {
  let specialClasses = '';

  if (props.notification.status === 'ERR_NETWORK') {
    specialClasses = classes.error;
  }
  if (props.notification.status === 'SUCCESS') {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.notification.title}</h2>
      <p>{props.notification.message}</p>
    </section>
  );
};

export default Notification;