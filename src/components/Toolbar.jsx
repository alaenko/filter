import React from 'react'
import PropTypes from 'prop-types'

function Toolbar(props) {
  const {filters, selected, onSelectFilter} = props;

  return (
    <div>
      {filters.map(filter => (
        <button
          onClick={() => onSelectFilter(filter)}
          className={filter === selected ? 'selected' : ''}
          key={filter
        }> {filter} </button>
      ))}
    </div>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.instanceOf(Array).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
}

export default Toolbar

