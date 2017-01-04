import '@material/list/dist/mdc.list.css'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import Divider from './Divider'
import Group from './Group'
import GroupSubheader from './GroupSubheader'
import Item from './Item'

class List extends Component {
  static propTypes = {
    themeDark: PropTypes.bool,
    dense: PropTypes.bool,
    twoLine: PropTypes.bool,
    avatarList: PropTypes.bool,
  }

  render() {
    const {themeDark, dense, twoLine, avatarList, children, className, ...rest} = this.props
    const classes = cx('mdc-list', {
      'mdc-list--theme-dark': themeDark,
      'mdc-list--dense': dense,
      'mdc-list--two-line': twoLine,
      'mdc-list--avatar-list': avatarList,
    }, className)
    return (
      <ul className={classes} {...rest}>
        {children}
      </ul>
    )
  }
}

List.Divider = Divider
List.Group = Group
List.GroupSubheader = GroupSubheader
List.Item = Item

export default List
