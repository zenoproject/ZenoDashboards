import React from 'react';
import {MentionsInput, Mention} from 'react-mentions';
import './style.scss';
export default class Mentions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MentionsInput
        markup='@__display__'
        className='mentions-block'
        value={this.props.value}
        onChange={this.props.onChange}
        singleLine={false}
        rows={5}>
        <Mention trigger='@' data={this.props.data} markup='@__display__' />
      </MentionsInput>
    );
  }
}
