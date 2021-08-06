import './SideBarRow.scss';
import {Avatar} from '@material-ui/core'


export default function SideBarRow({ src , title , Icon}) {
    return (
        <div className = "SideBarRow">
            {src && <Avatar src = {src} />}
            {Icon && <Icon />}
            <h3>{title}</h3>
        </div>
    );
}
