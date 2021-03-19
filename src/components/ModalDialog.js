import React, { Component } from 'react'

export class ModalDialog extends Component {

    noButtonClicked() {
        let modalDialog = document.getElementById("modal-dialog")
        modalYesNoDialog.classList.remove("modal-dialog-slide-in")
        modalYesNoDialog.classList.add("modal-dialog-slide-out")
        window.setTimeout(() => (modalDialog.style.visibility = "hidden"), 350)
    }
    
    render() {
        return (
            <div id="modal-dialog">
                <br/>
                <span>&nbsp;&nbsp;Delete List</span>
                <br/>
                <br/>
                <br/>
                <span>&nbsp;&nbsp;Are you sure you want to delete this list?</span>
                <br/>
                <br/>
                <span>
                    &nbsp;
                    <button type="button" id="modal-yes-button" onClick={this.props.deleteList}>Yes</button>
                    <button type="button" id="modal-no-button" onClick={() => this.noButtonClicked()}>No</button>
                </span>
                <br/>
                <br/>
                <span>&nbsp;&nbsp;The list will not be retrievable.</span>
            </div>
        )
    }
}