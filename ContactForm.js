class Label extends React.Component {
  render() {
    const text = this.props.text;
    return(
      <div>
        <label>{text}</label>
      </div>
    );
  }
}

class TextBox extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = props.onChange.bind(this);
  }
 
  render() {
    const placeholder = this.props.placeholder;
    const maxlength = this.props.maxlength || 10;
    const minlength = this.props.minlength || 5;
    return(
      <div>
        <Label text={this.props.text} /><br />
        <input type="text" id={this.props.keyName} value={this.props.value} placeholder={placeholder} maxLength={maxlength} minLength={minlength} onChange={this.handleChange} />
      </div>
    );
  }
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    const data = {
        name: '',
        phone: '',
        email: ''
     };
    this.state = data;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleChange(e) {
   this.setState({[e.target.id]: e.target.value});
  }
  
  handleSubmit(event) {
    var data = {
	    	name: this.state.name,
        phone: this.state.phone,
	    	email: this.state.email
	  }
    alert('A contact was submitted: ' + data.name + ', ' + data.phone + ', ' + data.email);
    event.preventDefault();
  }
  
  handleClear(component) {
  const data = { name: '', phone: '', email: '' };
     this.setState(data);
     event.preventDefault();
  }

  render() {
    return (
      <form id="contact-form">
         <Label text="Contact Form" /><br/>
         <TextBox placeholder="Please enter your fullname" maxlength={20} text="Name: " keyName="name" value={this.state.name} onChange={this.handleChange.bind(this)} />
        <br />
        <TextBox placeholder="Please enter your phone" text="Phone: " maxlength={8} keyName="phone" value={this.state.phone} onChange={this.handleChange.bind(this)} />
        <br />
        <TextBox placeholder="Please enter your email" text="Email: " maxlength={30} keyName="email" value={this.state.email} onChange={this.handleChange.bind(this)} />
        <br />
        <button onClick={this.handleSubmit}>Submit</button> &nbsp;
        <button onClick={this.handleClear.bind(this)}>Clear</button> &nbsp;
      </form>
    );
  }
}

ReactDOM.render(
  <ContactForm />,
  document.getElementById('root')
);
