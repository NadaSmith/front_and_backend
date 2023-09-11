import { Component } from "react";
import { logIn } from "../../utilities/users-services";

export default class LogInForm extends Component {

    state = {
      name: '',
      email: '',
      password: '',
      confirm: '',
      error: '',
    };

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
        error: ''
      })
    }

    handleSubmit = async (e) => {
      // Prevent form from being submitted to the server
      e.preventDefault();
      try {
        const formData = {...this.state};
        delete formData.error;
        delete formData.confirm;

        const user = await LogInForm(formData);
        this.props.setUser(user);
      } catch {
        // An error occurred
        this.setState({ error: 'Sign Up Failed - Try Again' });
      }
    };
    

    render() {
      const disable = this.state.password !== this.state.confirm;
      return (
        <div>
          <div className="form-container">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <label>Email</label>
              <input type="text" name="name" value={this.credential.email} onChange={this.handleChange} required />
              <label>Password</label>
              <input type="password" name="password" value={this.credential.password} onChange={this.handleChange} required />
              <button type="submit" disabled={disable}>SIGN UP</button>
            </form>
          </div>
          <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
      );
    }
}