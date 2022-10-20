import { useRouter } from "next/router";

export default function CurrentRoute() {
  const location = useRouter();
  return location.pathname;
}
