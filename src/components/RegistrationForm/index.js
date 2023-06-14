import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

    onBlurFirstName=()=>{
        const isValidFirstName=this.isValidFirstName()

        this.setState({showFirstNameError: !isValidFirstName})
    }  

    onBlurLastName=()=>{
        const isValidLastName=this.isValidLastName()
        this.setState({showLastNameError: !isValidLastName})
    }


  renderLastName = () => {
    const {lastName, showLastNameError} = this.state
    return (
      <div>
        <label className="input-label" htmlFor="password">
          LAST NAME
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={lastName}
          onChange={this.onChangeLastName}
          placeholder="Last name"
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  renderFirstName = () => {
    const {firstName, showFirstNameError} = this.state
    return (
      <div>
        <label className="input-label" htmlFor="username">
          FIRST NAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={firstName}
          onChange={this.onChangeFirstName}
          placeholder="First name"
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  isValidLastName=()=>{
      const{lastName}=this.state 
      return lastName!== ''
  }

  isValidFirstName=()=>{
      const{firstName}=this.state 

      return firstName!== ''
  }

  onSubmitForm=event=>{
      event.preventDefault()
      const isValidFirstName=this.isValidFirstName()
      const isValidLastName=this.isValidLastName()

      if (isValidFirstName && isValidLastName){
          this.setState({isFormSubmitted:true})
      }else{
          this.setState({
              showFirstNameError:!isValidFirstName,
              showLastNameError:!isValidLastName,
              isFormSubmitted:false,
          })
      }
  }

}

  renderRegistrationForm = () => {
    const {showFirstNameError, showLastNameError} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstName()}
        {showFirstNameError && <p className="error-message">Required</p>}
        {this.renderLastName()}
        {showLastNameError && <p className="error-message">Required</p>}
        <button type="button">Submit</button>
      </form>
    )
  }

  onSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstName: '',
      lastName: '',
    }))
  }

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully </p>
      <button type="button" onClick={this.onSubmitAnotherResponse}>
        Submit Another Response
      </button>
    </>
  )

  render(){
   const{isFormSubmitted}=this.state
    return (
      <div className="registration-container">
        <h1 className="heading">Registration</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
