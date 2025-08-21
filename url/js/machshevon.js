var SelectInput = React.createClass({
  changeHandler: function(e) {
    this.props.setTaxRate(e.target.value);
  },
  render: function() {
    var options = [];
    
    for (let i = this.props.min; i <= this.props.max; i++) {
      options.push(<option value={ i } >{ i }</option>);
    }
    
    return (
      <div>
        <select id="tax-rate" ref="taxRate"
                onChange={ this.changeHandler }
                value={ this.props.preSelected }
                title={ this.props.title }>
          { options }
        </select>
      </div>
    );
  }
});

var TaxCalculator = React.createClass({
  DEFAULT_TAX_RATE: 20,
  getInitialState: function() {
    return {
      totalAmount: 0,
      nettoAmount: 0,
      includedTax: 0,
      taxRate: this.DEFAULT_TAX_RATE
    }
  },
  setTaxRate: function(val) {
    this.setState( {
      taxRate: parseFloat(val)
    } );
  },
  setTotalAmount: function() {
    var toCheck = parseFloat(this.refs.totalAmount.value);

    if (typeof toCheck === 'number' && toCheck === toCheck) {
      this.refs.totalAmount.classList.remove('invalid-value');
      this.refs.calculate.removeAttribute('disabled');
    
      this.setState( {
        totalAmount: toCheck.toFixed(2)
      } );
    } else {
       this.refs.totalAmount.classList.add('invalid-value');
       this.refs.calculate.setAttribute('disabled');
       this.forceUpdate();
    }
  },
  calculate: function() {     
    this.state.includedTax =
      (( this.state.totalAmount / (100 + this.state.taxRate) ) 
        * this.state.taxRate).toFixed(2);
    this.state.nettoAmount = (this.state.totalAmount - this.state.includedTax).toFixed(2);
    
    this.forceUpdate();
    this.refs.totalAmount.setAttribute('disabled', 'disabled');
  },
  reset: function() {
    this.setState( {
      totalAmount: 0,
      nettoAmount: 0,
      includedTax: 0,
      taxRate: this.DEFAULT_TAX_RATE
    } );
    this.refs.totalAmount.value = 0;
    this.refs.totalAmount.removeAttribute('disabled');
    this.refs.totalAmount.classList.remove('invalid-value');
  },
  render: function() {   
    return (
      <div className="calculator-form">
        <div className="row">
          <div className="callout secondary">
            <h3>Value-added tax calculator</h3>
            <p>Enter the total amount and the tax rate for to get the amount of the contained tax.</p>
          </div>
        </div>
        <div className="row">
          <div className="labeled-input medium-12 large-6 columns">
            <label for="total-amount">Total amount: </label>
            <input type="text" id="total-amount" required pattern="[0-9]+"
                   ref="totalAmount" onChange={ this.setTotalAmount } 
                   title="Enter here the total amount."
                   placeholder="Please enter the total amount as a number here ..." />
          </div>
          <div className="labeled-input medium-12 large-6 columns">
            <label for="Tax-rate">Tax rate: </label>
            <SelectInput min="1" max="99" 
              preSelected={ this.state.taxRate }
              setTaxRate={ this.setTaxRate }
              title="Enter here the tax-rate." />
          </div>
        </div>
        
        <div className="row buttons">
          <div className="button-group expanded">
            <a className="button" onClick={ this.calculate }
               disabled="disabled" ref="calculate"
               title="Calculate the netto amount and included tax based upon the entered
                      total amount.">Calculate</a>
            <a className="warning button" onClick={ this.reset }>Reset</a>
          </div>
        </div>
        
        <div className="row">    
          <div className="labeled-input medium-12 large-6 columns">
            <label for="included-tax">Included tax: </label>
            <input type="text" id="included-tax" className="read-only"
                   ref="includedTax"
                   value={ this.state.includedTax } />
          </div>
          <div className="labeled-input medium-12 large-6 columns">
            <label for="netto-amount">Netto amount: </label>
            <input type="text" id="netto-amount" className="read-only"
                   ref="nettoAmount" value={ this.state.nettoAmount } />
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <TaxCalculator />,
  document.querySelector('#app')
);