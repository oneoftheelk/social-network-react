import { addMessageActionCreator } from './../../redux/messageReducer';
import DialogsPage from './DialogsPage';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
});

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (executor) => {
            dispatch(addMessageActionCreator(executor));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsPage);