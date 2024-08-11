import io, { Socket } from "socket.io-client";
import { ENV } from "./constants";

export let socket: Socket | null = null;

export function initSocket() {
  socket = io(ENV.SOCKET_URL);
}
