// CreateItemForm.js

import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { createItem } from "./api";

const CreateItemForm = () => {
  const [itemName, setItemName] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation(createItem, {
    onSuccess: () => {
      // Invalidate and refetch the 'items' query after successful mutation
      queryClient.invalidateQueries("items");
    },
  });

  const handleCreateItem = async () => {
    // Call the mutation function with the new item
    await mutation.mutate({ name: itemName });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={handleCreateItem} disabled={mutation.isLoading}>
        {mutation.isLoading ? "Creating..." : "Create Item"}
      </button>
    </div>
  );
};

export default CreateItemForm;
                    