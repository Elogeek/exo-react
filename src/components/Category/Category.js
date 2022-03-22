import './Category.css';

export const Category = function ()  {

    return(
        <div className="Category">
            <div className="select">
                <select>
                    <option>Categories</option>
                    <option value="1">Wii</option>
                    <option value="2">Nintendo</option>
                    <option value="3">PC</option>
                </select>
            </div>
        </div>
    );
};