function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
const API = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      quotes: [
      {
        quote: "Life isn’t about getting and having, it’s about giving and being.",
        author: "Kevin Kruse" }],


      index: 0 });_defineProperty(this, "getRandomIndex",









    () => {
      const { quotes } = this.state;
      if (quotes.length > 0)
      {
        const index = Math.floor(Math.random() * quotes.length);
        this.setState({
          index });

      }
    });}componentDidMount() {fetch(API).then(res => res.json()).then(res => {this.setState({ quotes: res.quotes }, this.getRandomIndex);});}
  render() {
    const { quotes, index } = this.state;

    const quote = quotes[index];

    const tweetURL = `https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`;

    return /*#__PURE__*/(
      React.createElement("div", { className: "wrapper d-flex align-items-center                           justify-content-center" }, /*#__PURE__*/
      React.createElement("div", { className: "col-xs-12 col-6 box p-4 rounded", id: "quote-box" },
      quote && /*#__PURE__*/
      React.createElement("div", { className: "mb-3" }, /*#__PURE__*/
      React.createElement("h5", { className: "p-2", id: "text" }, /*#__PURE__*/
      React.createElement("i", { className: "fas fa-quote-left" }),
      quote.quote), /*#__PURE__*/

      React.createElement("cite", { id: "author", className: "d-block text-end" }, "- ", quote.author)), /*#__PURE__*/


      React.createElement("div", { className: "d-flex justify-content-between" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("a", { className: "btn btn-secondary btn-sm", target: "_blank", href: tweetURL, id: "tweet-quote" }, /*#__PURE__*/React.createElement("i", { className: "fab fa-twitter" }))), /*#__PURE__*/

      React.createElement("button", { className: "btn btn-sm m-1 btn-secondary", id: "new-quote", onClick: this.getRandomIndex }, "New Quote")))));




  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));