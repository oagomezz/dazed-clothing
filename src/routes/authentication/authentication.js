import SignUpForm from '../../components/SignUp/SignUpForm.Component'
import SignInForm from '../../components/SignIn/SignInForm.Component'

import './authentication.styles.scss'


const Authentication = () => {

  return (
      <div className='authentication'>
        <SignInForm />
        <SignUpForm />
      </div>
  )
}

export default Authentication