import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchAllPosts = createAsyncThunk('AllPost/fetchAllPosts', async () => {
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();
    return data.posts; // Assuming the posts are under "posts"
});

const MenuToggleSlice = createSlice({
    name: "MenuToggle",
    initialState: "Home",
    reducers: {
        ToggleMenu: (state, action) => {
            return state = action.payload;
        }
    }
})
const SidebarToggleSlice = createSlice({
    name: "SideBarToggle",
    initialState: false,
    reducers: {
        ToggleSideBar: (state) => {
            return !state;
        }
    }
})
const FetchingDoneSlice = createSlice({
    name: "FetchingDone",
    initialState: false,
    reducers: {
        FetchChange: (state) => {
            return state;
        }
    }
})

const AllPostDataSlice = createSlice({
    name: "AllPost",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});
export const MenuToggleAction = MenuToggleSlice.actions;
export const SidebarToggleAction = SidebarToggleSlice.actions;
export const FetchingDoneAction = FetchingDoneSlice.actions;
export const AllPostDataAction = AllPostDataSlice.actions;

const FaceBookStore = configureStore({
    reducer: {
        MenuToggle: MenuToggleSlice.reducer,
        FetchDone: FetchingDoneSlice.reducer,
        AllData: AllPostDataSlice.reducer,
        SideToggle: SidebarToggleSlice.reducer
    }
})

export default FaceBookStore