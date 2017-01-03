import React from 'react';
import StepForm from './step_form';
import StepListItem from './step_list_item';

class StepList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          { this.props.steps.map((step, idx) =>
            <StepListItem
              key={idx}
              step={step}
              removeStep={this.props.removeStep}
              receiveStep={this.props.receiveStep}
              />
          )}
        </ul>
        <div>
          <StepForm
            receiveStep={this.props.receiveStep}
            todoId={this.props.todoId}
            />
        </div>
      </div>
    );
  }
}

export default StepList;
