import React from 'react'

export default class TextLabel extends React.Component {

    render() {

        return (
            <div>
                {this.props.value}
            </div>
        )
    }
}