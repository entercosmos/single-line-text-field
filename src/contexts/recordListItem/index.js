import React from 'react'
import {css} from 'emotion'

export default class SingleLineTextField extends React.Component {

    render() {

        return (
            <div
                data-context-id={this.props.contextId}
                data-role-id={this.props.roleId}
                className={css`
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    height: 100%;
                    display: inline-flex;
                    overflow: hidden;
                    align-items: center;
                    line-height: 1.5;
                    font-size: 13px;
                `}
            >
                <div
                    className={css`
                        flex: 1 1 auto;
                        min-width: 0;
                        min-height: 0;
                        max-width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    `}
                >
                    {this.props.text}
                </div>
            </div>
        )
    }
}