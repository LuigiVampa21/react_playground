import { json } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import axios from 'axios';


function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request, params }) => {
  const mode = new URL(request.url).searchParams.get('mode') || 'login';
  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: 'Unsupported mode. ' }, { status: 422 });
  }
  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password')
  }
  try {
    const response = await axios.post('http://localhost:8080/' + mode, authData);
    const {data} = response
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.response);
    throw json({message: err.response.data.message}, {status: err.response.status});
  }
}