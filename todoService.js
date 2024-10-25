const createTodo = async (userId, todo) => {
    todo.id = crypto.randomUUID();

    const kv = await Deno.openKv();
    await kv.set(["todos", userId, todo.id], todo);
};

const listTodos = async (userId) => {
    const kv = await Deno.openKv();
    const entries = await kv.list({ prefix: ["todos", userId] });
    const todos = [];

    for await (const entry of entries){
        todos.push(entry.value);
    }

    return todos;
};

const getTodo = async (userId, id) => {
    const kv = await Deno.openKv();
    const todo = await kv.get(["todos", userId, id]);
    return todo?.value ?? { status: 404, message: "Todo not found" }; //Return 404 if the todo is not found
};

const updateTodo = async (userId, id, todo) => {
    const kv = await Deno.openKv();
    todo.id = id;
    await kv.set(["todos", userId, id], todo);
};

const deleteTodo = async (userId, id) => {
    const kv = await Deno.openKv();
    await kv.delete(["todos", userId, id]);
};

export { createTodo, listTodos, getTodo, updateTodo, deleteTodo};