import { ClientDto } from "@/src/models/clients/client-dto";
import Dropdown from "../../ui/dropdown";
import Button from "../../ui/button";
import { ThreeDotsIcon } from "../../icons/three-dots-icon";
import { useRouter } from "next/navigation";
import { useDelete } from "@/src/hooks/use-delete";
import { useQueryClient } from "@tanstack/react-query";
import { useToastStore } from "@/src/store/toast-store";
import { AxiosError } from "axios";
import { errorExtractor } from "@/src/services/error-extractor";
import { CustomApiError } from "@/src/models/abstractions/api-error";

interface Props {
  clients: ClientDto[];
}

export default function ClientsTable({ clients }: Props) {
  const { showToast } = useToastStore();

  const router = useRouter();

  const { mutateAsync: deleteClientAsync } = useDelete<boolean>({
    options: {},
  });

  const queryClient = useQueryClient();

  const handleEdit = (client: ClientDto) => {
    router.push(`/app/clients/edit/${client.id}`);
  };

  const handleDelete = async (client: ClientDto) => {
    const url = "clients/" + client.id;

    await deleteClientAsync(url, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["clients/" + client.id],
          exact: true,
        });
        queryClient.invalidateQueries({
          queryKey: ["clients"],
        });

        showToast("Client successfully deleted", "success");
        router.push("/app/clients");
      },
      onError: (error: AxiosError<CustomApiError>) => {
        const errorMessage = errorExtractor(error);
        showToast(errorMessage, "error");
      },
    });
  };

  return (
    <div className="overflow-auto rounded-lg border border-gray-200">
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            <th scope="col" className="px-4 py-3">
              Name
            </th>
            <th scope="col" className="px-4 py-3">
              Email
            </th>
            <th scope="col" className="px-4 py-3">
              Color
            </th>
            <th scope="col" className="px-4 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {clients?.map((client) => (
            <tr className="border-b" key={client.id}>
              <th
                scope="row"
                className="whitespace-nowrap px-4 py-3 font-medium text-gray-900"
              >
                {client.firstName} {client.lastName}
              </th>
              <td className="px-4 py-3">{client.email}</td>
              <td className="px-4 py-3">
                {<div className={`size-4 rounded-sm ${client.color}`}></div>}
              </td>
              <td className="flex items-center justify-end px-4 py-3">
                <Dropdown
                  trigger={
                    <div className="relative">
                      <Button
                        icon={<ThreeDotsIcon />}
                        size="xs"
                        color="white"
                      />
                    </div>
                  }
                  items={[
                    {
                      label: "Edit",
                      onClick: () => handleEdit(client),
                    },
                    {
                      label: "Delete",
                      onClick: () => handleDelete(client),
                    },
                  ]}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
