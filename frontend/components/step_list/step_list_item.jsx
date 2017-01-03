import React from 'react';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleUpdate (e) {
    e.preventDefault();
    this.props.step.done = (this.props.step.done === true) ? false : true;
    this.props.receiveStep(this.props.step);
  }

  handleDelete (e) {
    e.preventDefault();
    this.props.removeStep(this.props.step);
  }

  render() {
    let step = this.props.step;

    return (
      <li>
        <div>
          { step.title }
        </div>
        <button onClick={this.handleUpdate}>
          {step.done === true ? "Undo" : "Done"}
        </button>
        <button onClick={this.handleDelete}>
          Delete Step
        </button>
      </li>
    );
  }
}

export default StepListItem;
