import { SearchIcon, PlusIcon } from '../Assets/Icons';
import ListConversations from './ListConversations';

function List() {
  return (
    <aside className='aside'>
      
        <form className="aside-search">
            <label>
                <SearchIcon color='#9AA0A6'/>
                <input type="text" placeholder="Search..." />
            </label>

            <button>
                <PlusIcon/>
                Nuevo Chat  
            </button>
        </form>

        <ListConversations/>
    </aside>
  )
}

export default List