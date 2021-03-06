import React from 'react'
import classNames from 'classnames'
import Branch from './Branch'
import styles from './FlatTree.css'

class FlatTree extends React.Component {

  renderBranch(name) {
    const label = this.props.categoryLabels[name]
    return (
      <Branch onOpenItem={this.props.onOpenItem} key={name} name={name} label={label} nodes={this.props.branches[name]} categoryLabels={this.props.categoryLabels} />
    );
  }

  render() {
    // console.log(this.props)
    return (
      <div className={classNames(styles.flatTree, this.props.className)}>
        { Object.keys(this.props.branches).map(k => this.renderBranch(k))}
      </div>
    );
  }
}

export default FlatTree
