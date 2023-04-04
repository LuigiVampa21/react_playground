import { useNavigate, useNavigation, useActionData, redirect } from 'react-router-dom';
import { Form } from 'react-router-dom';

import classes from './EventForm.module.css';
import axios from 'axios';

const EventForm = ({ method, event }) => {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSbubmitting = navigation.state === 'submitting';



  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errrors && (
        <ul>
          {Object.values(data.errors).map(err => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )
      }
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event !== null ? event.title : ""} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event !== null ? event.image : ""} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event !== null ? event.date : ""} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event !== null ? event.description : ""} />
      </p>
      <div className={classes.actions}>
        <button type="button" disabled={isSbubmitting} onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSbubmitting} >{isSbubmitting ? "Submitting.." : "Save"} </button>
      </div>
    </Form >
  );
}

export default EventForm;

export const action = async ({ request, params }) => {
  const { method } = request;
  console.log(method);
  try {
    const form = await request.formData();
    const title = form.get("title")
    const image = form.get("image")
    const date = form.get("date")
    const description = form.get("description")
    const eventObj = { title, image, date, description };
    if (method === 'POST') {
      const response = await axios.post('http://localhost:8080/events', eventObj);
      console.log(response);
      // return redirect('/events');
    }
    if (method === 'PATCH') {
      const { id } = params;
      const response = await axios.patch('http://localhost:8080/events/' + id, eventObj);
      console.log(response);
    }
    return redirect('/events');
  } catch (err) {
    console.log(err);
    const { status } = err.response;
    if (status === 422) {
      return err.response
    }
    throw { status: 'error', data: err.data.message }
    // return err;
    
  }
}

