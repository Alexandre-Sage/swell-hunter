import { useEffect, useState } from "react";
import { CrudAPI } from "../../modules/api/api";
import { User, UserId } from "../../types";

class UserApi extends CrudAPI<User, UserId> {
  constructor(prefix = "/users") {
    super(prefix);
  }
  useUser = () => {
    const [user, setUser] = useState<User>({} as User);
    const reFetch = async () => this.fetchOne({ urlParams: "/x" });
    useEffect(() => {
      (async () => {
        setUser((await this.fetchOne({ urlParams: "/x" })).payload);
      })();
    }, []);
    return {
      user,
      setUser,
      reFetch,
    };
  };
}

export const { useUser } = new UserApi();
