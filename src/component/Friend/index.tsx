import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import FriendWrapper from "./styled";
import { GetInvitationCode } from "../../service/static/common";

interface IProps {
  children?: ReactNode;
}

const Friend: FC<IProps> = () => {
  const [invite_code, setinviteCode] = useState("");
  useEffect(() => {
    (async () => {
      const res = await GetInvitationCode();
      console.log(res);
      setinviteCode(res.data.invite_code);
    })();
  }, []);
  return (
    <FriendWrapper>
      <div className="content">
        <p>成功邀请同学获得50积分</p>
        <p> 累计人数越多，额外积分越多</p>
        <p>点击分享按钮，或者截屏转发二维码均可收获的积分可享本软件</p>
      </div>
      <div className="contentA">
        <div className="code">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAB25JREFUeF7tnFF6GzcMhOszOfdoj9reo7dI75F+G8k1s+LuPwNwHVeZPpYgCMwMQFBS/PL6+vrttw/87++//nw47cvvf/zw/2Y2o8Hefu+Q9s/SpRi669uZFPcVNLyE4BusXQJpfwge5EsVSJVA+1PBV/SKu8+06AvBnbh+aNEV9Z+FrLSu/f5uhdL+7TzKk+Km9UqX6FI/yzsEH6BKBNJ6CD6RK1WgW32zo1wfe/sQfEd1BRDuM4gEkhY9IKqANRKwQul0J9MZiiAoL6rwyn1JYqeYKK/SHbz60ApwXWCUyZ3AqxC6WqgUYwg2OlNFiCSCrlBD8AHCqeCTT5E+Q4t2K4PsK0OWWz2KqNxZwo1hs8d3cAiey4XICcFKmYk2rghTwcYw4raNjxheFF1QHCSaVPDCDzoqYCokd2xcAWxnZYoWRUFAdYhT94ZgkawZoEQgraskdexCcAh+0A8Jk0TjzjvSM6mjcuXeUfy7wNCdrUzRSlyjDcW4CouzuEofVbqJ7u2VxOkM8uGuh2BC3Fgn8BVX5MNdD8EK6qINga+4IR/u+i9NsAJ4x2bFR3h0x9L6jGBXJHSGkmcHR3Xv/+J30avBD8GqPAp2irLd6nAFEIILxKlbQrCK1Bq7l2//fP3Qf5s0C7tSgaMft+Jnb9J9XPRlxBr4r/cSgg8wDsELxZcKXgjmzlUqOBV8nbrePKeCr8MY38E0wNBwQuQpQxelX7kvKS5ap5iUvCpxn50rfdngEubaK0l1vzZTwCcCaV05Y29zhc/xjBA8oEFg03oIviNQASoVXJHP/G+A4O+i3aOI0Bl5dM9TW6czlfvQzbNiT3m61x3Zb+shuMJUcU8ILrb1VPANuFmnSwUXq7Gy7adU8P7LBqoGGoDcJI6UR+P/uE53tHIHu3HTmcqs4T6jiJtZng8fVZKTEHzcDkmUrihIdOTv+5CVCp4T5gqZqrHSqULwHVVFyUQAgak8SZ6ygl1wqTIqw4sLvnIGXVUkmNkZXaxo//Sjym6LpkMrQCgEnNm4MVWGsEpeblwrRNa+g7tBd8lcUSkheEDAVVVF6V3SXdE9NcH7vxftgkOEr7hzuwOQEoObNwl35o/iWB3D92dSCNbetdRVSOjb/hB8gGIqmOR1W5e+8HfbBCmXVKuEHoIVlESCr3hTauG9W5FoyJ+yX7Ghc9z1FWJ3z7R/dOceULHvgq/sV2wqsZ/tCcF3dLrgK/sVmxC8GoEQvBxRbNF0ojsAkb9tvetTGRTddunGVImB9lDXkaZohYDRxk1c8d/1SUApb1IaNkkglRhoTwi+s0JAhWClzA7AJGUrrlPBc5RSwangB2XgkEXV1F2fDVX7KKkrUEue7V8Rd3cW6cZA+7f4QrD4NHNFRvbKa4EIpPUQPJRg5X5LBYtv2kqLPQNXafGkflrvPqM+rILpr+yQsmkqVvYr7axLqEuISzDhoMwaJEwqhFkM+Dc6FILOklP2h+Das0gRVQheNGQpYLsVqBQHnRuCn53g/W+y6K4ixdC68iat+KA97jpVm3utKHcwVSydOYvZfge7QNHgoCSu+OjG5QqbwJ7F44rGHfRCsKEClwzFteszBCuoFm1cMpRjXJ8fQjC1LvfemCVZaXdjXC4QSvvs5lXJifJwBbLliXdwCL4h4IIfggflVMBIBT/2oSU/2ekqOS36+LZ2sVVeF9iiqe/TIRT0FcMJXSvbOnWN1XkreRKWSl57mxB8gHwIPgDGnT4VZRPYlWqs7DmLlfJW8kwFi6JSWlkILrYuAq6iZLeCyV6JgSryijyVuM5sSh9VKtUw2lyROBFGZFSAI59X5FmJ8+y5uK3hkBWCbwiseA10CaT9qWBCaFh/mgqm32QZmJRNXTCpZZcDOSGYOhnloMREbb+SN/6iQwmsa0Pg0Hr3/Nl+F+wVMbpnKnmH4EVPrxB8IjcCh9YVJbs2bjWtiNE9U8kpFfzsFUw/ulNU4thUBgWqDnfdiffN1n0mKd+arfBJudjvYHJI6yH4HaEQfMfCrVAXOBJl5YOOVLCCagj+AaVK92v/MVLiiapPeYNWEhv9zqZTt8q79oTTtl7BivIMwQddYk9ICBafG0o1dpW8DyUVPCCiEKC0mzebClmVPWcxheATgunTFbeVKdMlCYjaJa3P/LvCdnGhnJR1N8bNJ97BbiIEbghWqJzbhOA7LiSyVPCAQCp4Xk0uLvW6fd+ZCj6o4MpbmwY9WlcIXeGj/Q52lUrt8WfcwSH4yafoEByC8VeTlc5EbfqXadH0yZM7XCjAkQ1dTSsI755BAvo07+AQrL17SRAzL5/ig44QHIKVbvSfDbXfzZBsqFqepkVbyE6MCcgrwKaOUPkkS8mDsCLR0P79OolMuoPdQwlc5R2sBD6eQ0OYAqzrg+yVp1kXWwUnvIO7QSjKJxsiiMCm/VuOrg+yD8EDAiG4VkalCq4dpe9SWrTu7WapJFq5vzrXgJJnpQu42HyK30UrLfQssRB8jE4IvmNDIqNqo2tGeS241anYh+AQrOhEt1HuJt1b7mDC6l/yUsWSAF6pZwAAAABJRU5ErkJggg=="
            alt=""
            className="img"
          />
        </div>
        <div className="invite-info">邀请码 {invite_code} </div>
        <div className="invite-count">您已邀请0人</div>
        <button type="button" className="invite-button">
          分享邀请
        </button>
      </div>
    </FriendWrapper>
  );
};

export default memo(Friend);
