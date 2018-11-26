import React from 'react';

export function wrapSidePageWithButton(SidePage, SidePageButton) {
    return class WrappedSidePageWithButton extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                opened: false
            }
        }

        onOpen = () => {
            this.setState({ opened: true });
        }

        onClose = () => {
            this.setState({ opened: false });
        }

        render() {
            return (
                <div>
                    { this.state.opened && 
                        <SidePage onClose={this.onClose} {...this.props} />
                    }
                    <SidePageButton onOpen={this.onOpen} {...this.props} />
                </div>
            )
        }
    }
}